import {RefObject} from "react";

export const scrollComponentIntoView = (componentName: string, selectedComponent: string, htmlRef: RefObject<HTMLInputElement | null>) => {
  if (componentName === selectedComponent && htmlRef.current) {
    htmlRef.current.scrollIntoView({ behavior: "smooth" });
}};

export const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
