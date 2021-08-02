import './Tag.scss';

const Tag = (content, color) => {
  return `
    <span class="tag" style="background: ${color}">
      ${content}
    </span>
  `;
};

export default Tag;
