import { site } from "@/shared/config/site";
import { contactContent } from "../data/contact.content";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <iframe
        title={`Map to ${site.name} in ${site.address.city}, ${site.address.state}`}
        src={contactContent.mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-72 w-full border-0 sm:h-full sm:min-h-[360px]"
        allowFullScreen
      />
    </div>
  );
}
