// Central image registry. All images are bundled locally (fingerprinted by Vite).
import img_hero from "@/assets/images/site/hero.webp";
import img_cta from "@/assets/images/site/cta.webp";
import img_about from "@/assets/images/site/about.webp";
import img_service_inspection from "@/assets/images/site/service-inspection.webp";
import img_service_construction from "@/assets/images/site/service-construction.webp";
import img_service_maintenance from "@/assets/images/site/service-maintenance.webp";
import img_service_search_recovery from "@/assets/images/site/service-search-recovery.webp";
import img_service_salvage from "@/assets/images/site/service-salvage.webp";
import img_service_marine_construction from "@/assets/images/site/service-marine-construction.webp";
import img_service_pipeline from "@/assets/images/site/service-pipeline.webp";
import img_service_pontoon_marina from "@/assets/images/site/service-pontoon-marina.webp";
import img_service_mooring from "@/assets/images/site/service-mooring.webp";
import img_service_silt from "@/assets/images/site/service-silt.webp";
import img_service_welding from "@/assets/images/site/service-welding.webp";
import img_service_buoy from "@/assets/images/site/service-buoy.webp";
import img_project_seaworld from "@/assets/images/site/project-seaworld.webp";
import img_project_emirates_steel from "@/assets/images/site/project-emirates-steel.webp";
import img_project_dubai_metro from "@/assets/images/site/project-dubai-metro.webp";
import img_project_emaar from "@/assets/images/site/project-emaar.webp";

export const IMAGES = {
  hero: img_hero,
  cta: img_cta,
  about: img_about,

  services: {
    inspection: img_service_inspection,
    construction: img_service_construction,
    maintenance: img_service_maintenance,
    searchRecovery: img_service_search_recovery,
    salvage: img_service_salvage,
    marineConstruction: img_service_marine_construction,
    pipeline: img_service_pipeline,
    pontoonMarina: img_service_pontoon_marina,
    mooring: img_service_mooring,
    silt: img_service_silt,
    welding: img_service_welding,
    buoy: img_service_buoy,
  },

  projects: {
    seaworld: img_project_seaworld,
    emiratesSteel: img_project_emirates_steel,
    dubaiMetro: img_project_dubai_metro,
    emaar: img_project_emaar,
  },
};
