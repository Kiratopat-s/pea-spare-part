import { ReactNode } from "react";

const MainStructure = ({
  classname,
  children,
}: {
  classname?: string;
  children: ReactNode;
}) => {
  return (
    <main
      className={`${classname} w-screen h-screen flex flex-row justify-center bg-neutral`}
    >
      <div className="flex flex-col m-4 items-center gap-4">{children}</div>
    </main>
  );
};

export default MainStructure;
