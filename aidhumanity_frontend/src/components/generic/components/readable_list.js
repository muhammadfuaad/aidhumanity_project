import Readable from "./readable"

function Readable_list() {
  return (
    <div>
      <p className="text-[2.4rem] font-bold tracking-[-0.6px] text-primary mb-4 sm:mb-0">The most readable</p>       
      <div className="flex flex-col">
        <div className="border-b border-platinum">< Readable number="01" title="Mauris vel ornare massa, at ullamcorper ligula" /></div>
        <div className="border-b border-platinum">< Readable number="02" title="Duis aute irure dolor in reprehenderit in voluptate" /></div>
        <div className="border-b border-platinum">< Readable number="03" title="Excepteur sint occaecat cupidatat non proident" /></div>
        <div className="border-b border-platinum">< Readable number="04" title="Ut enim ad minim veniam, quistino" /></div>
        <div className="">< Readable number="05" title="Tristique nulla aliquet enim tortor at" /></div>
      </div>
    </div>
  );
}
export default Readable_list;