import { useMemo, useState, useEffect, useCallback } from 'react';

const FADE_IN_CLASS = 'fade-in';
const HIDE_CLASS = 'hide';

export function useControllableFadeIn() {
  const [isFading, setIsFading] = useState(false);

  const startFade = useCallback(() => {
    setIsFading(true);
  }, []);

  useEffect(() => {
    if (!isFading) return;

    setIsFading(false);
  }, [isFading]);

  const data = useMemo(
    () => ({ fadeClass: isFading ? HIDE_CLASS : FADE_IN_CLASS, startFade }),
    [isFading, startFade]
  );
  return data;
}
