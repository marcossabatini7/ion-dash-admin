interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title(props: TitleProps) {
  return (
    <>
      <h1 className="">{props.title}</h1>
      <h2 className="">{props.subtitle}</h2>
    </>
  );
}
