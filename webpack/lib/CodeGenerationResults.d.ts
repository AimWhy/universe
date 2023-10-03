export = CodeGenerationResults;
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {typeof import("./util/Hash")} Hash */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */
declare class CodeGenerationResults {
  /**
   * @param {string | Hash} hashFunction the hash function to use
   */
  constructor(hashFunction?: string | Hash);
  /** @type {Map<Module, RuntimeSpecMap<CodeGenerationResult>>} */
  map: Map<Module, RuntimeSpecMap<CodeGenerationResult>>;
  _hashFunction: string | typeof import('./util/Hash');
  /**
   * @param {Module} module the module
   * @param {RuntimeSpec} runtime runtime(s)
   * @returns {CodeGenerationResult} the CodeGenerationResult
   */
  get(module: Module, runtime: RuntimeSpec): CodeGenerationResult;
  /**
   * @param {Module} module the module
   * @param {RuntimeSpec} runtime runtime(s)
   * @returns {boolean} true, when we have data for this
   */
  has(module: Module, runtime: RuntimeSpec): boolean;
  /**
   * @param {Module} module the module
   * @param {RuntimeSpec} runtime runtime(s)
   * @param {string} sourceType the source type
   * @returns {Source} a source
   */
  getSource(module: Module, runtime: RuntimeSpec, sourceType: string): any;
  /**
   * @param {Module} module the module
   * @param {RuntimeSpec} runtime runtime(s)
   * @returns {ReadonlySet<string>} runtime requirements
   */
  getRuntimeRequirements(
    module: Module,
    runtime: RuntimeSpec,
  ): ReadonlySet<string>;
  /**
   * @param {Module} module the module
   * @param {RuntimeSpec} runtime runtime(s)
   * @param {string} key data key
   * @returns {any} data generated by code generation
   */
  getData(module: Module, runtime: RuntimeSpec, key: string): any;
  /**
   * @param {Module} module the module
   * @param {RuntimeSpec} runtime runtime(s)
   * @returns {any} hash of the code generation
   */
  getHash(module: Module, runtime: RuntimeSpec): any;
  /**
   * @param {Module} module the module
   * @param {RuntimeSpec} runtime runtime(s)
   * @param {CodeGenerationResult} result result from module
   * @returns {void}
   */
  add(module: Module, runtime: RuntimeSpec, result: CodeGenerationResult): void;
}
declare namespace CodeGenerationResults {
  export { Source, Module, CodeGenerationResult, Hash, RuntimeSpec };
}
type Module = import('./Module');
import { RuntimeSpecMap } from './util/runtime';
type CodeGenerationResult = import('./Module').CodeGenerationResult;
type RuntimeSpec = import('./util/runtime').RuntimeSpec;
type Hash = typeof import('./util/Hash');
type Source = any;