export default function BrandWordmark({ size="text-2xl"}:{size?:string}){
  return (
    <span className={`wordmark chrome-text neon ${size}`}>
      <span>FUNDINGGAUG</span><span className="eq">≡</span><span>™</span>
    </span>
  );
}
