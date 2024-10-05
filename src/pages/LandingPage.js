function LandingPage() {
  const podcastItems = Array.from({length: 100}, (_, i) => {
    return <PodcastCard podcast={{
      someKey: "Some Value", 
    }} key={i}/>;
  });

  return (
    <div className="p-4">
      <div className="flex justify-end align-center px-4 gap-3">
        <span className="rounded bg-sky-600 content-center text-white px-1 font-bold">{podcastItems.length}</span>
        <input className="border-2 rounded p-0.5 px-2" placeholder="Filter podcasts..."/>
      </div>
      <PodcastList podcasts={podcastItems}/>
    </div>
  );
}

export default LandingPage;

function PodcastList({podcasts}) {
  return (
    <div className="flex justify-center flex-wrap gap-5">
      {podcasts.map(item => item)}
    </div>
  );
}

function PodcastCard({podcast}) {
  return (
    <div className="flex-none w-180 relative mt-6">
      <img 
        className="rounded-full mx-auto absolute h-20 inset-0"
        src="https://picsum.photos/100" 
        alt="Placeholder from lorem picsum" />
      <div className="px-4 py-2 text-center pt-12 mt-8 shadow-md shadow-slate-300">
        <p className="uppercase">Test title</p>
        <p className="text-gray-500">Author: Test Author</p>
      </div>
    </div>
  );
}