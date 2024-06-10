import Button from '@common/Button';

export default function ButtonDownload({ className, onClick }) {
  function handleDownload() {
    window.open('/Jose Lacruz Resume.pdf');

    onClick?.();
  }
  return (
    <Button
      title={'Download CV'}
      customClasses={className}
      handleClick={handleDownload}
    />
  );
}
