declare module "react-win-size" {
  export function useWinSize({
    widthOffset,
    heightOffset,
    updateMode,
    delay,
  }?: {
    widthOffset?: number;
    heightOffset?: number;
    updateMode?: string;
    delay?: number;
  }): any[];

  export function withWinSize(
    WrappedComponent: any,
    {
      widthOffset,
      heightOffset,
      updateMode,
      delay,
    }?: {
      widthOffset?: number;
      heightOffset?: number;
      updateMode?: string;
      delay?: number;
    }
  ): {
    new (props: any): {
      handleWindowResize(): void;
      state: {
        width: number;
        height: number;
      };
      componentDidMount(): void;
      componentWillUnmount(): void;
      render(): any;
    };
  };
}
