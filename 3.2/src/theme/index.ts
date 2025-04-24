const palette = {
  primary: 'var(--color-primary-500)',
};

export const theme = {
  button: {
    background: {
      default: 'transparent',
      primary: palette.primary,
    },
    color: {
      default: 'rgba(0, 0, 0, 0.88)',
      primary: 'rgb(255, 255, 255)',
    },
    border: {
      default: '1px solid rgb(217, 217, 217)',
      primary: `1px solid ${palette.primary}`,
    },
    borderRadius: '6px',
    padding: '0 15px',
    height: '32px',
  },
};
