// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Twitter2SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Twitter2SvgrepoComsvgIcon(
  props: Twitter2SvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm4.926 217.391c.084.004.164.021.25.025a51.392 51.392 0 01-1.328-11.682c0-28.307 22.951-51.258 51.262-51.258 14.742 0 28.063 6.225 37.414 16.188 9.6-1.89 18.684-5.174 27.129-9.523 1.781-.864 3.566-1.723 5.32-2.674-3.039 9.334-8.744 17.412-16.141 23.532-2.004 1.576-4.062 3.098-6.326 4.344.154-.018.304-.052.457-.071-.15.093-.275.22-.428.312 8.402-1.005 16.459-3.051 24.111-5.942 1.715-.592 3.428-1.191 5.127-1.852-6.842 10.159-15.453 19.095-25.375 26.259.098 2.197.148 4.406.148 6.631 0 67.736-51.558 145.842-145.844 145.842-28.947 0-55.891-8.484-78.576-23.028 4.01.473 8.092.715 12.229.715 19.136 0 37.014-5.269 52.383-14.34 3.871-2.23 7.658-4.639 11.273-7.365-.098-.002-.187-.026-.285-.028.094-.073.196-.136.289-.209-19.422-.358-36.184-11.539-44.574-27.747a50.83 50.83 0 01-3.164-7.831 51.27 51.27 0 009.5.898c3.391 0 6.666-.436 9.871-1.063 1.197-.168 2.406-.308 3.586-.502-.156-.032-.293-.1-.449-.133.162-.042.336-.056.496-.1-23.449-4.709-41.119-25.428-41.119-50.262 0-.196.002-.387.004-.58l.024-.055c5.521 3.064 11.693 5.092 18.23 5.94 1.609.269 3.221.516 4.832.657-.11-.074-.205-.164-.314-.238.152.006.297.036.447.041-13.754-9.191-22.803-24.883-22.803-42.666 0-8.142 1.988-15.787 5.367-22.623.539-1.028 1.018-2.078 1.637-3.074 22.711 27.822 55.516 46.971 92.801 52.15 4.16.605 8.332 1.144 12.553 1.388-.006-.024-.008-.051-.014-.076z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Twitter2SvgrepoComsvgIcon;
/* prettier-ignore-end */
