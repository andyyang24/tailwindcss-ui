export default function Container(props) {
  return (
    <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
      {props.children}
    </div>
  );
}
