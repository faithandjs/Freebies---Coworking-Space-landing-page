import React from 'react';

export default function ButtonOrange({
  text,
  type,
  classes = '',
}: orangeButton) {
  const typedClass =
    type === 'fill'
      ? 'bg-orange text-white border-transparent '
      : 'bg-transparent text-orange border-orange ';
  return (
    <button
      className={
        ' rounded-md py-3 px-6 border font-heading ' + typedClass + classes
      }>
      {text}
    </button>
  );
}

