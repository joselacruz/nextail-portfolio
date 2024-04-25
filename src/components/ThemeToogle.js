import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import useTheme from '@hooks/useTheme';

export default function ThemeToogle() {
  const { setHtmlTheme, theme } = useTheme();

  function toogleTheme() {
    if (theme === 'dark') {
      setHtmlTheme('default');
    } else {
      setHtmlTheme('dark');
    }
  }
  return (
    <div
      className="cursor-pointer"
      onClick={toogleTheme}
    >
      {theme == 'dark' && <SunIcon className="w-8 text-text-secondary" />}
      {theme !== 'dark' && <MoonIcon className="w-8 text-text-secondary" />}
    </div>
  );
}
