import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export function FAQ() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It allows for accessibility from anywhere, making it easy for teams to collaborate and contribute regardless of their physical location.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with with customizable templates and workflows, making it adaptable to various industries and project requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md">Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-md">Can I use this in my project?</AccordionTrigger>
          <AccordionContent>
            Yes. Free to use for personal and commercial projects. No attribution required. <br/> <br/>
            But hey, let me know if you do. I&apos;d love to see what you build.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  