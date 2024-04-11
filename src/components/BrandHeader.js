import { BriefcaseIcon } from '@heroicons/react/24/solid';

export default function BrandHeader() {
  return (
    <div className="flex gap-2 items-end cursor-pointer">
      <BriefcaseIcon className=" w-8 fill-secondary" />
      <p className="text-xl font-bold text-primary">Jose L.</p>
    </div>
  );
}
