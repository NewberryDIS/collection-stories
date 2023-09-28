import { component$ } from '@builder.io/qwik';

export interface StoryProps {

}

export const Story = component$<StoryProps>((props) => {
  return (
    <div>
      Story component works!
    </div>
  );
});
