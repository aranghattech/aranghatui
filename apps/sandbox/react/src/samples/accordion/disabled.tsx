import { Accordion, AccordionItem } from '@aranghat/components-react';

export default function Disabled() {
  return (
    <>
      <Accordion disabled>
        <AccordionItem value="item-1">
          <span slot="trigger">Product Information</span>
          <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
        </AccordionItem>
        <AccordionItem value="item-2">
          <span slot="trigger">Shipping Details</span>
          <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days.</p>
        </AccordionItem>
        <AccordionItem value="item-3">
          <span slot="trigger">Return Policy</span>
          <p>We stand behind our products with a comprehensive 30-day return policy.</p>
        </AccordionItem>
      </Accordion>
    </>
  );
}
