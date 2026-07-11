import { SectionHeader, TimelineItem as TimelineItemComponent } from '@/components/ui';
import { EXPERIENCES } from '@/constants';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          description="My professional journey building software and solving problems."
        />

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <TimelineItemComponent
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
