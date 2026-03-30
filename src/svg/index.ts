import type { Component } from 'solid-js';
import AntSvg from './Ant';
import BeeSvg from './Bee';
import BeetleSvg from './Beetle';
import ButterflySvg from './Butterfly';
import CaterpillarSvg from './Caterpillar';
import CockroachSvg from './Cockroach';
import CricketSvg from './Cricket';
import DragonflySvg from './Dragonfly';
import EarthwormSvg from './Earthworm';
import FireflySvg from './Firefly';
import GrasshopperSvg from './Grasshopper';
import LadybugSvg from './Ladybug';
import MosquitoSvg from './Mosquito';
import PillBugSvg from './PillBug';
import PrayingMantisSvg from './PrayingMantis';
import SpiderSvg from './Spider';

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
};
