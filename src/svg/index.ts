import type { Component } from 'solid-js';
import AntSvg from './Ant';
import BeeSvg from './Bee';
import BeetleSvg from './Beetle';
import ButterflySvg from './Butterfly';
import CaterpillarSvg from './Caterpillar';
import CicadaSvg from './Cicada';
import CockroachSvg from './Cockroach';
import CricketSvg from './Cricket';
import DragonflySvg from './Dragonfly';
import EarthwormSvg from './Earthworm';
import EarwigSvg from './Earwig';
import FireflySvg from './Firefly';
import GnatSvg from './Gnat';
import GrasshopperSvg from './Grasshopper';
import HouseFlySvg from './HouseFly';
import LadybugSvg from './Ladybug';
import MosquitoSvg from './Mosquito';
import MothSvg from './Moth';
import PillBugSvg from './PillBug';
import PrayingMantisSvg from './PrayingMantis';
import SpiderSvg from './Spider';
import StagBeetleSvg from './StagBeetle';
import StickInsectSvg from './StickInsect';
import TermiteSvg from './Termite';
import WaspSvg from './Wasp';

export const bugSvgMap: Record<string, Component> = {
  ladybug: LadybugSvg,
  butterfly: ButterflySvg,
  caterpillar: CaterpillarSvg,
  bee: BeeSvg,
  ant: AntSvg,
  dragonfly: DragonflySvg,
  firefly: FireflySvg,
  spider: SpiderSvg,
  beetle: BeetleSvg,
  grasshopper: GrasshopperSvg,
  earthworm: EarthwormSvg,
  'praying-mantis': PrayingMantisSvg,
  'pill-bug': PillBugSvg,
  cricket: CricketSvg,
  mosquito: MosquitoSvg,
  cockroach: CockroachSvg,
  'house-fly': HouseFlySvg,
  gnat: GnatSvg,
  moth: MothSvg,
  earwig: EarwigSvg,
  wasp: WaspSvg,
  cicada: CicadaSvg,
  'stick-insect': StickInsectSvg,
  termite: TermiteSvg,
  'stag-beetle': StagBeetleSvg,
};
