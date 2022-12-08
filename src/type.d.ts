interface orangeButton {
  text: string;
  type: 'fill' | 'outline';
  classes?: string;
}
interface detailsView {
  subject: string;
  topic: string;
  text: string;
  orangeBtn: orangeButton;
  ExtraBtn?: (() => JSX.Element) | false;
  ExtraText?: (() => JSX.Element) | false;
  className?: string;
}
interface visionsList {
  heading: string;
  text: string;
  Icon: () => JSX.Element;
  color: string;
}

interface BenefitItemProp {
  Icon: () => JSX.Element;
  heading: string;
  text: string;
}

