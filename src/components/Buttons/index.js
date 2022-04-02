/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push('bg-primary');
  if (props.isLight) className.push('bg-slate-50');
  if (props.isBlock) className.push('block');
  if (props.hasShadow) className.push('shadow-lg');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push('disabled');
    return (
      <button className={className.join(' ')} style={props.style}>
        {props.isLoading ? (
          <>
            <svg class='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'></svg>
            <span>Processing...</span>
          </>
        ) : (
          props.children
        )}
      </button>
    );
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isExternal: propTypes.bool,
  isPrimary: propTypes.bool,
  isLight: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
