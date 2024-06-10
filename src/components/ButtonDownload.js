import Button from '@common/Button';

export default function ButtonDownload({ className }) {
  function handleDownload() {
    window.open('/Jose Lacruz Resume.pdf');
  }
  return (
    <Button
      title={'Download CV'}
      customClasses={className}
      handleClick={handleDownload}
    />
  );
}
