/**
 * Thư viện ảnh dùng chung cho toàn bộ mẫu.
 * Ảnh tải về từ Unsplash (Unsplash License) và lưu trong /public/img.
 */

export const img = {
  hvacAhu: "/img/hvac-ahu.jpg",
  hvacCeilingDiffuser: "/img/hvac-ceiling-diffuser.jpg",
  hvacOfficeCeiling: "/img/hvac-office-ceiling.jpg",
  hvacFan: "/img/hvac-fan.jpg",
  hvacDucts: "/img/hvac-ducts.jpg",
  hvacSpiralDuct: "/img/hvac-spiral-duct.jpg",
  hvacOutdoorUnits: "/img/hvac-outdoor-units.jpg",
  hvacLouver: "/img/hvac-louver.jpg",
  hvacPipeline: "/img/hvac-pipeline.jpg",
  hvacCassette: "/img/hvac-cassette.jpg",
  hvacDiffusers: "/img/hvac-diffusers.jpg",
  plantInterior: "/img/plant-interior.jpg",
  factoryChimney: "/img/factory-chimney.jpg",
  factoryCooling: "/img/factory-cooling.jpg",
  dataCenterAerial: "/img/data-center-aerial.jpg",
  constructionSite: "/img/construction-site.jpg",
  blueprintDrafting: "/img/blueprint-drafting.jpg",
  plansDesk: "/img/plans-desk.jpg",
  technician: "/img/technician-respirator.jpg",
  officeCityView: "/img/office-city-view.jpg",
  officeWorkspace: "/img/office-workspace.jpg",
  officeCorridor: "/img/office-corridor.jpg",
  officeModern: "/img/office-modern.jpg",
  officeMeetingRoom: "/img/office-meeting-room.jpg",
  officeLounge: "/img/office-lounge.jpg",
  campus: "/img/campus.jpg",
  buildingFacade: "/img/building-facade.jpg",
  towerGlass: "/img/tower-glass.jpg",
  skyscraper: "/img/skyscraper.jpg",
  buildingAngle: "/img/building-angle.jpg",
  buildingDusk: "/img/building-dusk.jpg",
  meetingNotes: "/img/meeting-notes.jpg",
  teamDiscussion: "/img/team-discussion.jpg",
  teamMeeting: "/img/team-meeting.jpg",
  teamWorking: "/img/team-working.jpg",
  hospitalCorridor: "/img/hospital-corridor.jpg",
  hospitalExterior: "/img/hospital-exterior.jpg",
  healthcare: "/img/healthcare.jpg",
  mallInterior: "/img/mall-interior.jpg",
  mallEscalator: "/img/mall-escalator.jpg",
  mallRetail: "/img/mall-retail.jpg",
  hotelPool: "/img/hotel-pool.jpg",
  hotelSuite: "/img/hotel-suite.jpg",
  hotelLobby: "/img/hotel-lobby.jpg",
  hotelRoom: "/img/hotel-room.jpg",
  warehouse: "/img/warehouse.jpg",
  warehouseAisle: "/img/warehouse-aisle.jpg",
  serverRoom: "/img/server-room.jpg",
  logisticsTruck: "/img/logistics-truck.jpg",
} as const;

export type ImageKey = keyof typeof img;

/** Ảnh đại diện cho từng ngành khách hàng */
export const sectorImages: Record<string, string> = {
  factory: img.plantInterior,
  building: img.buildingFacade,
  landmark: img.campus,
  health: img.hospitalCorridor,
  hotel: img.hotelLobby,
  truck: img.warehouse,
  server: img.serverRoom,
  store: img.mallInterior,
};

/** Ảnh đại diện cho từng dự án tiêu biểu */
export const projectImages: string[] = [
  img.plantInterior,
  img.mallEscalator,
  img.warehouseAisle,
  img.hospitalCorridor,
  img.hotelSuite,
  img.hvacSpiralDuct,
  img.towerGlass,
  img.campus,
  img.serverRoom,
  img.factoryChimney,
  img.mallInterior,
  img.hvacOutdoorUnits,
];
