const ContentHero= () => {
  return (
    <div className="max-w-screen max-h-screen mt-1 rounded-l-2xl">
      <div className="flex items-center justify-between align-middle mt-2 mx-2 py-20 mb-2">
        <p className="text-white font-customMonserrat font-bold text-5xl px-2">
          UNLEASH YOUR INNER DETECTIVE <br/>BECOME A BUG BOUNTY HUNTER<br/>
          <button className="text-white text-sm bg-customPurple border rounded mt-10 p-1">Get Started</button>
        </p>
        <img className="h-96 pr-10" src="src\assets\Hero-Banner.png"></img>
      </div>
    </div>
  );
}

const ContentHerosec= () => {
  return (
    <div className="bg-customPurple max-w-screen max-h-screen mt-1 rounded-t-3xl">
      <div className="flex items-center justify-between align-middle mx-2 pt-20 pb-40">
        <p className="text-white font-customMonserrat font-bold text-5xl px-2">
          UNLEASH YOUR INNER DETECTIVE <br/>BECOME A BUG BOUNTY HUNTER
        </p>
        <img className="h-96 px-2" src="src\assets\Hero-Banner.png"></img>
      </div>
    </div>
  );
}

const Page = () =>{
  return (
<div>
  <ContentHero/>
  <ContentHerosec/>
</div>
  );
}
export default Page;
