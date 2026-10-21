import type { ComponentType } from "react";
import AntDesign from "./ant";
import AtlasDesign from "./atlas";
import AuraDesign from "./aura";
import BasicDesign from "./basic";
import BentoDesign from "./bento";
import BracketDesign from "./bracket";
import CleanDesign from "./clean";
import CodexDesign from "./codex";
import ContemporaryDesign from "./contemporary";
import EditorialDesign from "./editorial";
import FluxDesign from "./flux";
import EnterpriseDesign from "./enterprise";
import FactoryDesign from "./factory";
import GlassDesign from "./glass";
import HorizonDesign from "./horizon";
import ImpeccableDesign from "./impeccable";
import MegaDesign from "./mega";
import LumenDesign from "./lumen";
import ModernDesign from "./modern";
import MonoDesign from "./mono";
import MosaicDesign from "./mosaic";
import PremiumDesign from "./premium";
import ProfessionalDesign from "./professional";
import PortalDesign from "./portal";
import ServiceDesign from "./service";
import ShadcnDesign from "./shadcn";
import SleekDesign from "./sleek";
import SplitDesign from "./split";
import TerracottaDesign from "./terracotta";
import TocDesign from "./toc";

export const designComponents: Record<string, ComponentType> = {
  aura: AuraDesign,
  flux: FluxDesign,
  atlas: AtlasDesign,
  lumen: LumenDesign,
  clean: CleanDesign,
  codex: CodexDesign,
  bento: BentoDesign,
  enterprise: EnterpriseDesign,
  modern: ModernDesign,
  ant: AntDesign,
  sleek: SleekDesign,
  editorial: EditorialDesign,
  premium: PremiumDesign,
  mono: MonoDesign,
  contemporary: ContemporaryDesign,
  professional: ProfessionalDesign,
  terracotta: TerracottaDesign,
  basic: BasicDesign,
  impeccable: ImpeccableDesign,
  shadcn: ShadcnDesign,
  mega: MegaDesign,
  bracket: BracketDesign,
  split: SplitDesign,
  toc: TocDesign,
  horizon: HorizonDesign,
  glass: GlassDesign,
  factory: FactoryDesign,
  service: ServiceDesign,
  mosaic: MosaicDesign,
  portal: PortalDesign,
};
