import { CeloContract } from './base'
import { ContractKit } from './kit'
import { AccountsWrapper } from './wrappers/Accounts'
import { AttestationsWrapper } from './wrappers/Attestations'
import { BlockchainParametersWrapper } from './wrappers/BlockchainParameters'
import { DoubleSigningSlasherWrapper } from './wrappers/DoubleSigningSlasher'
import { DowntimeSlasherWrapper } from './wrappers/DowntimeSlasher'
import { ElectionWrapper } from './wrappers/Election'
// import { EpochRewardsWrapper } from './wrappers/EpochRewards'
import { EscrowWrapper } from './wrappers/Escrow'
import { ExchangeWrapper } from './wrappers/Exchange'
import { GasPriceMinimumWrapper } from './wrappers/GasPriceMinimum'
import { GoldTokenWrapper } from './wrappers/GoldTokenWrapper'
import { GovernanceWrapper } from './wrappers/Governance'
import { GovernanceApproverMultiSigWrapper } from './wrappers/GovernanceApproverMultiSig'
import { LockedGoldWrapper } from './wrappers/LockedGold'
import { ReserveWrapper } from './wrappers/Reserve'
import { ReserveSpenderMultiSigWrapper } from './wrappers/ReserveSpenderMultiSig'
import { SortedOraclesWrapper } from './wrappers/SortedOracles'
import { StableTokenWrapper } from './wrappers/StableTokenWrapper'
import { ValidatorsWrapper } from './wrappers/Validators'

const WrapperFactories = {
  [CeloContract.Accounts]: AccountsWrapper,
  [CeloContract.Attestations]: AttestationsWrapper,
  [CeloContract.BlockchainParameters]: BlockchainParametersWrapper,
  [CeloContract.DoubleSigningSlasher]: DoubleSigningSlasherWrapper,
  [CeloContract.DowntimeSlasher]: DowntimeSlasherWrapper,
  [CeloContract.Election]: ElectionWrapper,
  // [CeloContract.EpochRewards]?: EpochRewardsWrapper,
  [CeloContract.Escrow]: EscrowWrapper,
  [CeloContract.Exchange]: ExchangeWrapper,
  // [CeloContract.FeeCurrencyWhitelist]: FeeCurrencyWhitelistWrapper,
  [CeloContract.GasPriceMinimum]: GasPriceMinimumWrapper,
  [CeloContract.GoldToken]: GoldTokenWrapper,
  [CeloContract.Governance]: GovernanceWrapper,
  [CeloContract.GovernanceApproverMultiSig]: GovernanceApproverMultiSigWrapper,
  [CeloContract.LockedGold]: LockedGoldWrapper,
  // [CeloContract.Random]: RandomWrapper,
  // [CeloContract.Registry]: RegistryWrapper,
  [CeloContract.Reserve]: ReserveWrapper,
  [CeloContract.ReserveSpenderMultiSig]: ReserveSpenderMultiSigWrapper,
  [CeloContract.SortedOracles]: SortedOraclesWrapper,
  [CeloContract.StableToken]: StableTokenWrapper,
  [CeloContract.Validators]: ValidatorsWrapper,
}

type CFType = typeof WrapperFactories
export type ValidWrappers = keyof CFType

interface WrapperCacheMap {
  [CeloContract.Accounts]?: AccountsWrapper
  [CeloContract.Attestations]?: AttestationsWrapper
  [CeloContract.BlockchainParameters]?: BlockchainParametersWrapper
  [CeloContract.DoubleSigningSlasher]?: DoubleSigningSlasherWrapper
  [CeloContract.DowntimeSlasher]?: DowntimeSlasherWrapper
  [CeloContract.Election]?: ElectionWrapper
  // [CeloContract.EpochRewards]?: EpochRewardsWrapper
  [CeloContract.Escrow]?: EscrowWrapper
  [CeloContract.Exchange]?: ExchangeWrapper
  // [CeloContract.FeeCurrencyWhitelist]?: FeeCurrencyWhitelistWrapper,
  [CeloContract.GasPriceMinimum]?: GasPriceMinimumWrapper
  [CeloContract.GoldToken]?: GoldTokenWrapper
  [CeloContract.Governance]?: GovernanceWrapper
  [CeloContract.GovernanceApproverMultiSig]?: GovernanceApproverMultiSigWrapper
  [CeloContract.LockedGold]?: LockedGoldWrapper
  // [CeloContract.Random]?: RandomWrapper,
  // [CeloContract.Registry]?: RegistryWrapper,
  [CeloContract.Reserve]?: ReserveWrapper
  [CeloContract.ReserveSpenderMultiSig]?: ReserveSpenderMultiSigWrapper
  [CeloContract.SortedOracles]?: SortedOraclesWrapper
  [CeloContract.StableToken]?: StableTokenWrapper
  [CeloContract.Validators]?: ValidatorsWrapper
}

/**
 * Kit ContractWrappers factory & cache.
 *
 * Provides access to all contract wrappers for celo core contracts
 */
export class WrapperCache {
  // private wrapperCache: Map<CeloContract, any> = new Map()
  private wrapperCache: WrapperCacheMap = {}

  constructor(readonly kit: ContractKit) {}

  getAccounts() {
    return this.getContract(CeloContract.Accounts)
  }
  getAttestations() {
    return this.getContract(CeloContract.Attestations)
  }
  getBlockchainParameters() {
    return this.getContract(CeloContract.BlockchainParameters)
  }
  getDoubleSigningSlasher() {
    return this.getContract(CeloContract.DoubleSigningSlasher)
  }
  getDowntimeSlasher() {
    return this.getContract(CeloContract.DowntimeSlasher)
  }
  getElection() {
    return this.getContract(CeloContract.Election)
  }
  // getEpochRewards() {
  //   return this.getContract(CeloContract.EpochRewards)
  // }
  getEscrow() {
    return this.getContract(CeloContract.Escrow)
  }
  getExchange() {
    return this.getContract(CeloContract.Exchange)
  }
  // getFeeCurrencyWhitelist() {
  //   return this.getWrapper(CeloContract.FeeCurrencyWhitelist, newFeeCurrencyWhitelist)
  // }
  getGasPriceMinimum() {
    return this.getContract(CeloContract.GasPriceMinimum)
  }
  getGoldToken() {
    return this.getContract(CeloContract.GoldToken)
  }
  getGovernance() {
    return this.getContract(CeloContract.Governance)
  }
  getGovernanceApproverMultiSig(address: string) {
    return this.getContract(CeloContract.GovernanceApproverMultiSig, address)
  }
  getLockedGold() {
    return this.getContract(CeloContract.LockedGold)
  }
  // getRegistry() {
  //   return this.getWrapper(CeloContract.Registry, newRegistry)
  // }
  getReserve() {
    return this.getContract(CeloContract.Reserve)
  }
  getReserveSpenderMultiSig(address: string) {
    return this.getContract(CeloContract.ReserveSpenderMultiSig, address)
  }
  getSortedOracles() {
    return this.getContract(CeloContract.SortedOracles)
  }
  getStableToken() {
    return this.getContract(CeloContract.StableToken)
  }
  getValidators() {
    return this.getContract(CeloContract.Validators)
  }

  /**
   * Get Contract wrapper
   */
  public async getContract<C extends ValidWrappers>(contract: C, address?: string) {
    if (this.wrapperCache[contract] == null) {
      const instance = await this.kit._web3Contracts.getContract(contract, address)
      const Klass: CFType[C] = WrapperFactories[contract]
      this.wrapperCache[contract] = new Klass(this.kit, instance as any) as any
    }
    return this.wrapperCache[contract]!
  }
}
