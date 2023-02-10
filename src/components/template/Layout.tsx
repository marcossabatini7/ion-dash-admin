import Content from "./Content";
import Header from "./Header";
import SideNav from "./SideNav";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <SideNav />
      <Header title={props.title} subtitle={props.subtitle} />
      <Content>{props?.children}</Content>
    </>
  );
}
