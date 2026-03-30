import { A } from '@solidjs/router';
import { Dynamic } from 'solid-js/web';
import type { BugInfo } from '../data/bugs';
import { bugSvgMap } from '../svg';

interface Props {
  bug: BugInfo;
}

export default function BugCard(props: Props) {
  const SvgComponent = () => bugSvgMap[props.bug.id];

  return (
    <A href={`/bug/${props.bug.id}`} class="bug-card" style={{ '--bug-color': props.bug.color }}>
      <div class="bug-card-svg">
        <Dynamic component={SvgComponent()} />
      </div>
      <div class="bug-card-info">
        <span class="bug-card-emoji">{props.bug.emoji}</span>
        <h3 class="bug-card-name">{props.bug.name}</h3>
        <p class="bug-card-tagline">{props.bug.tagline}</p>
      </div>
    </A>
  );
}
