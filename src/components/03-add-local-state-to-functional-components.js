import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

// general purpose higher order component
// note how `Status` and `Tooltip` (commented out) are similar in that they show and hide
// the `withToggle` HOC is reusable across multiple scenarios (e.g. `Status` and `Tooltip`)
const withToggle = compose(
  withState('toggledOn', 'toggle', false),
  withHandlers({
    show: ({ toggle }) => (e) => toggle(true),
    hide: ({ toggle }) => (e) => toggle(false),
    toggle: ({ toggle }) => (e) => toggle(current => !current),
  }),
);

const StatusList = () =>
  <div className="status-list">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

// `listShown`: name of state object that holds state value
// `setListVisible`: name of method that will be called to change the `listShown` state value
// `false`: initial state value
// const Status = withState('listShown', 'setListVisible', false)(
//   ({ status, listShown, setListVisible }) =>
//     <span onClick={() => setListVisible(x => !x)}>
//       {status}
//       { listShown && <StatusList /> }
//     </span>,
//   );

const Status = withToggle(({ status, toggledOn, toggle}) =>
  <span onClick={toggle}>
    {status}
    { toggledOn && <StatusList /> }
  </span>,
);

// const Tooltip = withState('tooltipShown', 'setTooltipVisible', false)(
//   ({ text, children, tooltipShown, setTooltipVisible }) =>
//     <span>
//       {
//         tooltipShown &&
//           <span className="tooltip">
//             {text}
//           </span>
//       }
//       <span
//         onMouseEnter={() => setTooltipVisible(true)}
//         onMouseLeave={() => setTooltipVisible(false)}
//       >
//         {children}
//       </span>
//     </span>,
//   );

const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) =>
  <span>
    {
      toggledOn &&
        <span className="tooltip">
            {text}
        </span>
    }
    <span
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
    </span>
  </span>,
);

const User = ({ name, status }) =>
  <div className="user">
    <Tooltip text="Cool Dude!">
      {name}
    </Tooltip>
    : <Status status={status} />
  </div>;

const AddLocalStateToFunctionalComponents = () => (
  <div>
    <User name="Greg" status="active" />
  </div>
);

export default AddLocalStateToFunctionalComponents;
