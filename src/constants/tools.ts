import Base64Tool from '../tools/Base64Tool';
import AsciiUnicodeTool from '../tools/AsciiUnicodeTool';
import HexTool from '../tools/HexTool';
import BinaryTool from '../tools/BinaryTool';
import UrlTool from '../tools/UrlTool';
import MorseTool from '../tools/MorseTool';
import Rot13Tool from '../tools/Rot13Tool';
import CaesarTool from '../tools/CaesarTool';
import AesRsaTool from '../tools/AesRsaTool';
import SteganographyTool from '../tools/SteganographyTool';

export const tools = [
  {
    id: 'base64',
    translationKey: 'tool.base64',
    component: Base64Tool,
    icon: 'Code',
  },
  {
    id: 'ascii-unicode',
    translationKey: 'tool.ascii',
    component: AsciiUnicodeTool,
    icon: 'Languages',
  },
  {
    id: 'hex',
    translationKey: 'tool.hex',
    component: HexTool,
    icon: 'Hash',
  },
  {
    id: 'binary',
    translationKey: 'tool.binary',
    component: BinaryTool,
    icon: 'Binary',
  },
  {
    id: 'url',
    translationKey: 'tool.url',
    component: UrlTool,
    icon: 'Link',
  },
  {
    id: 'morse',
    translationKey: 'tool.morse',
    component: MorseTool,
    icon: 'Radio',
  },
  {
    id: 'rot13',
    translationKey: 'tool.rot13',
    component: Rot13Tool,
    icon: 'RotateCw',
  },
  {
    id: 'caesar',
    translationKey: 'tool.caesar',
    component: CaesarTool,
    icon: 'KeyRound',
  },
  {
    id: 'aes-rsa',
    translationKey: 'tool.aes',
    component: AesRsaTool,
    icon: 'Lock',
  },
  {
    id: 'steganography',
    translationKey: 'tool.steg',
    component: SteganographyTool,
    icon: 'Image',
  },
];