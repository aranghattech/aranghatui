import { Component } from '@angular/core';
import { ArtQuestionnaire } from '@aranghat/components-angular';

@Component({
  selector: 'sample-questionnaire-free-text',
  imports: [ArtQuestionnaire],
  template: `
    <art-questionnaire items="[{&quot;name&quot;:&quot;feedback&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;Anything else we should know?&quot;,&quot;input&quot;:{&quot;label&quot;:&quot;Your feedback&quot;,&quot;placeholder&quot;:&quot;Write a few words…&quot;,&quot;multiline&quot;:true},&quot;minLength&quot;:10}]"></art-questionnaire>
  `,
})
export class QuestionnaireFreeText {}
