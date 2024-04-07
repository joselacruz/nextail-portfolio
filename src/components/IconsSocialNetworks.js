'use client';
import { svgArray } from '@utils/svgList';
export default function IconsSocialNetworks() {
  function handleLocation(url) {
    window.open(url, '_blank');
  }
  return (
    <div className="IconsSocialNetworks-container flex">
      {svgArray.map((svg) => (
        <div
          className=" IconsSocialNetworks rounded-full p-3 hover:bg-primary hover:fill-white cursor-pointer flex justify-center items-center"
          key={svg.id}
          onClick={() => {
            handleLocation(svg.href);
          }}
        >
          {svg.render()}
        </div>
      ))}
    </div>
  );
}
