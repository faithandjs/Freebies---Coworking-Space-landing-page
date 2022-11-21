import React from 'react';

export default function ButtonOrange({
  text,
  type,
  classes = '',
}: {
  text: string;
  type: 'fill' | 'outline';
  classes?: string;
}) {
  const typedClass =
    type === 'fill'
      ? 'bg-orange text-white border-transparent '
      : 'bg-transparent text-orange border-orange ';
  return (
    <button className={' rounded-md py-3 px-4 border ' + typedClass + classes}>
      {text}
    </button>
  );
}

