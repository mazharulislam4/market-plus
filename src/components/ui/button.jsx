/* eslint-disable react/prop-types */

function Button({children}) {
  return (
    <button type="button" className="bg-slate-400 py-2 px-3 rounded-sm">
     {children}
     {20+20}
    </button>
  );
}

export default Button;
