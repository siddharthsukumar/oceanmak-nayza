export default function SectionLabel({ index, children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="label-mono text-precision hidden">{index}</span>
      <span className="h-px w-8 bg-precision/60" />
      <span className="label-mono text-faint">{children}</span>
    </div>);

}