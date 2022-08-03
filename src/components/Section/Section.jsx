import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section} title={title}>
      <h2 className={css.h2}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
