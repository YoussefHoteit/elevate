import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-2">
            Feature Showcase
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            3D Integration with Spline
          </h1>
        </div>
        
        <SplineSceneBasic />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Responsive", desc: "Works seamlessly across all devices and screen sizes." },
            { title: "Interactive", desc: "Engage users with real-time 3D interactions." },
            { title: "Performant", desc: "Lazy-loaded components ensure fast initial page loads." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;