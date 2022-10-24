import { Vue, Component, Prop, Ref } from 'vue-property-decorator';
@Component({
  depends: [],
})
export default class SeamlessScroll extends Vue {
  @Prop({ default: 'horizontal' }) mode: string;
  @Prop({ default: 60 }) speed: number;
  @Prop({ default: false }) reverse: boolean;

  private children: any[] = [];
  private requestID: number = 0;

  private sliderSize: number = 0;
  private containerSize: number = 0;
  private step = 1;

  @Ref('sliderDom') sliderDom!: HTMLDivElement;
  @Ref('sliderDomCopy') sliderDomCopy!: HTMLDivElement;
  @Ref('containerDom') containerDom!: HTMLDivElement;
  @Ref('wrapperDom') wrapperDom!: HTMLDivElement;

  marquee() {
    const key = this.mode === 'vertical' ? 'top' : 'left';
    const position = parseFloat(this.getStyle(this.wrapperDom!, key));
    if (this.reverse) {
      if (position >= 0) {
        this.wrapperDom!.style[key] = `-${this.sliderSize}px`;
      } else {
        this.wrapperDom!.style[key] = `${position + this.step}px`;
      }
    } else {
      if (this.sliderSize - Math.abs(position) <= 0) {
        this.wrapperDom!.style[key] = '0px';
      } else {
        this.wrapperDom!.style[key] = `${position - this.step}px`;
      }
    }
    cancelAnimationFrame(this.requestID);
    this.requestID = requestAnimationFrame(this.marquee);
  }

  getStyle = (ele: HTMLElement, attr: string) => {
    if (window.getComputedStyle) {
      return window.getComputedStyle(ele)[attr];
    }
    return (ele as any).currentStyle[attr];
  };

  //function to return the offset height of the element
  async getOffsetHeight(ele: HTMLElement) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const height = this.mode === 'vertical' ? this.sliderDom!.offsetHeight : this.sliderDom!.offsetWidth;
        resolve(height);
      }, 0);
    });
  }

  init() {
    this.children = this.$slots.default || [];
    this.step = parseFloat((this.speed / 60).toFixed(2));
    //execute after getting the offset height of the element
    this.getOffsetHeight(this.sliderDom).then((height: number) => {
      this.sliderSize = height;
    });
    this.containerSize = this.mode === 'vertical' ? this.containerDom!.clientHeight : this.containerDom!.clientWidth;
    cancelAnimationFrame(this.requestID);

    if (this.sliderSize < this.containerSize) {
      this.sliderDomCopy!.innerHTML = this.sliderDom!.innerHTML;
      this.requestID = requestAnimationFrame(this.marquee);

      this.containerDom!.onmouseover = () => {
        cancelAnimationFrame(this.requestID);
      };
      this.containerDom!.onmouseout = () => {
        cancelAnimationFrame(this.requestID);
        this.requestID = requestAnimationFrame(this.marquee);
      };
    } else {
      this.sliderDomCopy!.innerHTML = '';
      this.containerDom!.onmouseover = null;
      this.containerDom!.onmouseout = null;
    }
  }

  mounted() {
    this.init();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestID);
  }

  render() {
    const className = 'seamless-scroll';
    const containerStyle: any = {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    };
    const style: any = {
      width: '500px',
      height: '300px',
      background: '#eee',
    };
    const WrapperStyle: any = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: this.mode === 'vertical' ? 0 : 'auto',
      bottom: this.mode === 'vertical' ? 'auto' : 0,
      whiteSpace: this.mode === 'vertical' ? 'normal' : 'nowrap',
    };
    const sliderStyle: any = {
      display: this.mode === 'vertical' ? 'block' : 'inline-block',
    };

    return (
      <div className={className} ref={'containerDom'} style={{ ...containerStyle, ...style }}>
        <div ref={'wrapperDom'} style={WrapperStyle}>
          <div style={sliderStyle} ref={'sliderDom'}>
            {this.children}
          </div>
          <div style={sliderStyle} ref={'sliderDomCopy'}></div>
        </div>
      </div>
    );
  }
}
