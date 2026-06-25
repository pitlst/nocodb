import type { CloudFeaturesType } from '~/lib/types'

const eeConfigState = createGlobalState(() => {
  const cloudFeatures = ref<CloudFeaturesType[]>([])

  return { cloudFeatures }
})

export const useEeConfig = createSharedComposable(() => {
  const { cloudFeatures } = eeConfigState()

  const { appInfo } = useGlobal()

  const isOrgBilling = ref(false)

  const isSideBannerExpanded = ref(false)

  const isPaidPlan = computed(() => false)

  const activePlan = computed(() => undefined)

  const activePlanTitle = computed(() => undefined)

  const isHigherActivePlan = computed(() => false)

  const activeSubscription = computed(() => undefined)

  const isLoyaltyDiscountAvailable = computed(() => false)

  const isPaymentEnabled = computed(() => true)

  const blockAddNewRecord = computed(() => false)

  const isRecordLimitReached = computed(() => false)

  const gracePeriodActive = computed(() => true)

  const gracePeriodEndDate = computed(() => '')

  const isWsAuditEnabled = computed(() => true)

  const isAllowToAddExtension = computed(() => true)

  const blockAddNewExtension = computed(() => false)

  const blockExtensions = computed(() => false)

  const blockAddNewAttachment = computed(() => false)

  const blockAddNewExternalSource = computed(() => false)

  const blockAddNewWebhook = computed(() => false)

  const isTopBannerVisible = computed(() => false)

  const blockWsImageLogoUpload = computed(() => false)

  const blockCurrentUserFilter = computed(() => false)

  const blockRowColoring = computed(() => false)

  const blockToggleFilter = computed(() => false)

  const blockToggleGroupBy = computed(() => false)

  const blockToggleSort = computed(() => false)

  const blockPinnedFilter = computed(() => false)

  const blockCellColoring = computed(() => false)

  const blockTableAndFieldPermissions = computed(() => false)

  const blockPrivateBases = computed(() => false)

  const blockAddNewDashboard = computed(() => false)

  const blockCalendarRange = computed(() => false)

  const blockTimelineView = computed(() => false)

  const blockGanttView = computed(() => false)

  const blockAddNewScript = computed(() => false)

  const showUserMayChargeAlert = computed(() => false)

  const maxAttachmentsAllowedInCell = computed(() => {
    // Keeping 50 to keep backward fallback compatibility
    return Math.max(1, +appInfo.value.ncMaxAttachmentsAllowed || 50)
  })

  const blockAiPromptField = computed(() => false)

  const blockAiButtonField = computed(() => false)

  const blockAiChat = computed(() => false)

  const blockAiIntegrations = computed(() => false)

  const blockAiIntegrationsLimit = computed(() => false)

  const blockDocAi = computed(() => false)

  const blockButtonVisibility = computed(() => false)

  const blockTableVisibility = computed(() => false)

  const blockFieldVisibility = computed(() => false)

  const blockColourField = computed(() => false)

  const blockTeamHierarchy = computed(() => false)

  const blockTeamsManagement = computed(() => false)

  const blockAddNewTeamToWs = computed(() => false)

  const blockCardFieldHeaderVisibility = computed(() => false)

  const blockAddNewSandbox = computed(() => false)

  const blockSync = computed(() => false)

  const blockTableSync = computed(() => false)

  const blockTableSyncAuto = computed(() => false)

  const blockCustomSync = computed(() => false)

  const blockUnique = computed(() => false)

  const blockUuidField = computed(() => false)

  const blockListView = computed(() => false)

  const blockMapView = computed(() => false)

  const blockAutoNumberField = computed(() => false)

  const calculatePrice = (..._args: any[]) => {}

  const getLimit = (..._args: any[]) => {}

  const getStatLimit = (..._args: any[]) => {}

  const updateStatLimit = (..._args: any[]) => {}

  const getFeature = (..._args: any[]) => {
    return true
  }

  const getFeatureForPlanTitle = (..._args: any[]) => {
    return true
  }

  const getHigherPlan = (..._args: any[]) => {}

  const getPlanTitle = (..._args: any[]) => {}

  const navigateToBilling = (..._args: any[]) => {}

  const navigateToPricing = (..._args: any[]) => {}

  const navigateToCheckout = (..._args: any[]) => {}

  const handleUpgradePlan = (..._args: any[]) => {}

  const showUserPlanLimitExceededModal = (..._args: any[]) => {}

  const showRecordPlanLimitExceededModal = (..._args: any[]) => {}

  const showStoragePlanLimitExceededModal = (..._args: any[]) => {}

  const showExternalSourcePlanLimitExceededModal = (..._args: any[]) => {}

  const showWebhookPlanLimitExceededModal = (..._args: any[]) => {}

  const showWebhookLogsFeatureAccessModal = (..._args: any[]) => {}

  const blockExternalSourceRecordVisibility = (..._args: any[]) => {}

  const showAsBluredRecord = (..._args: any[]) => {}

  const showUpgradeToSeeMoreRecordsModal = (..._args: any[]) => {}

  const showUpgradeToUploadWsImage = (..._args: any[]) => {}

  const showUpgradeToUseCurrentUserFilter = (..._args: any[]) => {}

  const showUpgradeToUseRowColoring = (..._args: any[]) => {}

  const showUpgradeToUseToggleFilter = (..._args: any[]) => {}

  const showUpgradeToUseToggleGroupBy = (..._args: any[]) => {}

  const showUpgradeToUseToggleSort = (..._args: any[]) => {}

  const showUpgradeToUsePinnedFilter = (..._args: any[]) => {}

  const showUpgradeToUseCellColoring = (..._args: any[]) => {}

  const showUpgradeToUseTableAndFieldPermissions = (..._args: any[]) => {}

  const showUpgradeToUseTableVisibility = (..._args: any[]) => {}

  const showUpgradeToUseFieldVisibility = (..._args: any[]) => {}

  const showUpgradeToAddAiIntegration = (..._args: any[]) => {}

  const blockDocumentPermissions = computed(() => false)

  const showUpgradeToUseDocumentPermissions = (..._args: any[]) => {}

  const showUpgradeToUsePrivateBases = (..._args: any[]) => {}

  const showUpgradeToAddMoreAttachmentsInCell = (..._args: any[]) => {}

  const blockDocs = computed(() => false)

  const showUpgradeToUseDocs = (..._args: any[]) => {}

  const blockDocsInlineComments = computed(() => false)

  const blockDocsResolveComments = computed(() => false)

  const blockDocsExportPdf = computed(() => false)

  const blockDocShare = computed(() => false)

  const showUpgradeToShareDoc = (..._args: any[]) => {}

  const showDashboardPlanLimitExceededModal = (..._args: any[]) => {}

  const showDocumentPagePlanLimitExceededModal = (..._args: any[]) => {}

  const showUpgradeToUseDocsInlineComments = (..._args: any[]) => {}

  const showUpgradeToUseDocsResolveComments = (..._args: any[]) => {}

  const showUpgradeToUseDocsExportPdf = (..._args: any[]) => {}

  const revisionRetentionLadder = computed<{ title: string; days: number }[]>(() => [])

  const requiredPlanForRevisionAge = (..._args: any[]): string | null => null

  const showScriptPlanLimitExceededModal = (..._args: any[]) => {}

  const showUpgradeToUseCalendarRange = (..._args: any[]) => {}

  const showUpgradeToUseTimelineView = (..._args: any[]) => {}

  const showUpgradeToUseGanttView = (..._args: any[]) => {}

  const showUpgradeToUseAiPromptField = (..._args: any[]) => {}

  const showUpgradeToUseAiButtonField = (..._args: any[]) => {}

  const showUpgradeToUseAiChat = (..._args: any[]) => {}

  const showUpgradeToUseAiIntegrations = (..._args: any[]) => {}

  const showUpgradeToUseDocAi = (..._args: any[]) => {}

  const showUpgradeToUseButtonVisibility = (..._args: any[]) => {}

  const showUpgradeToUseColourField = (..._args: any[]) => {}

  const showUpgradeToUseTeamHierarchy = (..._args: any[]) => {}

  const showUpgradeToUseTeams = (..._args: any[]) => {}

  const showUpgradeToAddMoreTeams = (..._args: any[]) => {}

  const showUpgradeToUseSync = (..._args: any[]) => {}

  const showUpgradeToUseTableSync = (..._args: any[]) => {}

  const showUpgradeToUseCustomSync = (..._args: any[]) => {}

  const showUpgradeToUseUnique = (..._args: any[]) => {}

  const showUpgradeToUseUuidField = (..._args: any[]) => {}

  const showUpgradeToUseAutoNumberField = (..._args: any[]) => {}

  const blockRecordTemplates = computed(() => false)

  const blockRls = computed(() => false)

  const showUpgradeToUseRecordTemplates = (..._args: any[]) => {}

  const showUpgradeToUseRls = (..._args: any[]) => {}

  const showUpgradeToDuplicateTableToOtherWs = (..._args: any[]) => {}

  const showUpgradeToDuplicateTableToOtherBase = (..._args: any[]) => {}

  const blockFormScheduling = computed(() => false)

  const showUpgradeToUseFormScheduling = (..._args: any[]) => {}

  const blockViewSections = computed(() => false)

  const showUpgradeToUseViewSections = (..._args: any[]) => {}

  const blockBaseVariables = computed(() => false)

  const showUpgradeToUseBaseVariables = (..._args: any[]) => {}

  const showSandboxPlanLimitExceededModal = (..._args: any[]) => {}
  const showUpgradeToUseListView = (..._args: any[]) => {}

  const showUpgradeToUseMapView = (..._args: any[]) => {}

  const blockDateDependency = computed(() => false)

  const showUpgradeToUseDateDependency = (..._args: any[]) => {}

  const showUpgradeToUseExtensions = (..._args: any[]) => {}
  const blockMfa = computed(() => false)
  const showUpgradeToUseMfa = (..._args: any[]) => {}

  const blockForce2fa = computed(() => false)
  const showUpgradeToUseForce2fa = (..._args: any[]) => {}

  const isEEFeatureBlocked = computed(() => false)

  const showEEFeatures = computed(() => true)

  const blockWorkspaceCreate = computed(() => false)

  const blockWorkspaceMembers = computed(() => false)

  const showUpgradeToCreateWorkspace = (..._args: any[]) => {}

  const showUpgradeToManageWorkspaceMembers = (..._args: any[]) => {}

  const showUpgradeForEEFeature = (..._args: any[]) => {}

  const blockSSO = computed(() => false)

  const showUpgradeToUseSSO = (..._args: any[]) => {}

  const blockScim = computed(() => false)

  const showUpgradeToUseScim = (..._args: any[]) => {}

  const blockMssql = computed(() => false)

  const showUpgradeToUseMssql = (..._args: any[]) => {}

  const blockWhiteLabel = computed(() => false)

  const showUpgradeToUseWhiteLabel = (..._args: any[]) => {}

  const showUpgradeToUseAudit = (..._args: any[]) => {}

  const blockTrashSettings = computed(() => false)

  const showUpgradeToUseTrashSettings = (..._args: any[]) => {}

  const blockFormGridLayout = computed(() => false)

  const showUpgradeToUseFormGridLayout = (..._args: any[]) => {}

  const blockSnapshots = computed(() => false)

  const showUpgradeToUseSnapshots = (..._args: any[]) => {}

  const blockCustomUrls = computed(() => false)

  const showUpgradeToUseCustomUrls = (..._args: any[]) => {}

  const blockScripts = computed(() => false)

  const showUpgradeToUseScripts = (..._args: any[]) => {}

  const blockWorkflows = computed(() => false)

  const showUpgradeToUseWorkflows = (..._args: any[]) => {}

  const blockBookmarks = computed(() => false)

  const showUpgradeToUseBookmarks = (..._args: any[]) => {}

  return {
    calculatePrice,
    getLimit,
    getStatLimit,
    updateStatLimit,
    getFeature,
    getFeatureForPlanTitle,
    isPaidPlan,
    activePlan,
    activePlanTitle,
    activeSubscription,
    getHigherPlan,
    getPlanTitle,
    handleUpgradePlan,
    isPaymentEnabled,
    showUserPlanLimitExceededModal,
    isRecordLimitReached,
    gracePeriodActive,
    blockAddNewRecord,
    showRecordPlanLimitExceededModal,
    navigateToBilling,
    isWsAuditEnabled,
    isAllowToAddExtension,
    blockAddNewExtension,
    blockAddNewAttachment,
    showStoragePlanLimitExceededModal,
    blockAddNewExternalSource,
    showExternalSourcePlanLimitExceededModal,
    blockAddNewWebhook,
    showWebhookPlanLimitExceededModal,
    showWebhookLogsFeatureAccessModal,
    blockExternalSourceRecordVisibility,
    showAsBluredRecord,
    showUpgradeToSeeMoreRecordsModal,
    navigateToPricing,
    navigateToCheckout,
    isLoyaltyDiscountAvailable,
    gracePeriodEndDate,
    isTopBannerVisible,
    showUpgradeToUploadWsImage,
    blockWsImageLogoUpload,
    isSideBannerExpanded,
    cloudFeatures,
    blockCurrentUserFilter,
    showUpgradeToUseCurrentUserFilter,
    blockRowColoring,
    showUpgradeToUseRowColoring,
    blockToggleFilter,
    showUpgradeToUseToggleFilter,
    blockToggleGroupBy,
    showUpgradeToUseToggleGroupBy,
    blockToggleSort,
    showUpgradeToUseToggleSort,
    blockPinnedFilter,
    showUpgradeToUsePinnedFilter,
    blockCellColoring,
    showUpgradeToUseCellColoring,
    blockTableAndFieldPermissions,
    showUpgradeToUseTableAndFieldPermissions,
    blockTableVisibility,
    showUpgradeToUseTableVisibility,
    blockFieldVisibility,
    showUpgradeToUseFieldVisibility,
    blockDocumentPermissions,
    showUpgradeToUseDocumentPermissions,
    blockPrivateBases,
    showUpgradeToUsePrivateBases,
    showUserMayChargeAlert,
    maxAttachmentsAllowedInCell,
    showUpgradeToAddMoreAttachmentsInCell,
    blockDocs,
    showUpgradeToUseDocs,
    blockDocsInlineComments,
    blockDocsResolveComments,
    blockDocsExportPdf,
    blockDocShare,
    showUpgradeToShareDoc,
    showDashboardPlanLimitExceededModal,
    showDocumentPagePlanLimitExceededModal,
    showUpgradeToUseDocsInlineComments,
    showUpgradeToUseDocsResolveComments,
    showUpgradeToUseDocsExportPdf,
    revisionRetentionLadder,
    requiredPlanForRevisionAge,
    showScriptPlanLimitExceededModal,
    blockAddNewScript,
    blockAddNewDashboard,
    blockCalendarRange,
    showUpgradeToUseCalendarRange,
    blockTimelineView,
    showUpgradeToUseTimelineView,
    blockGanttView,
    showUpgradeToUseGanttView,
    isOrgBilling,
    blockAiPromptField,
    showUpgradeToUseAiPromptField,
    blockAiButtonField,
    showUpgradeToUseAiButtonField,
    blockAiChat,
    showUpgradeToUseAiChat,
    blockAiIntegrations,
    showUpgradeToUseAiIntegrations,
    blockAiIntegrationsLimit,
    showUpgradeToAddAiIntegration,
    blockDocAi,
    showUpgradeToUseDocAi,
    blockButtonVisibility,
    showUpgradeToUseButtonVisibility,
    blockColourField,
    showUpgradeToUseColourField,
    blockTeamHierarchy,
    showUpgradeToUseTeamHierarchy,
    blockTeamsManagement,
    showUpgradeToUseTeams,
    blockAddNewTeamToWs,
    showUpgradeToAddMoreTeams,
    isHigherActivePlan,
    blockCardFieldHeaderVisibility,
    blockSync,
    blockTableSync,
    blockTableSyncAuto,
    blockCustomSync,
    blockRls,
    blockUnique,
    blockUuidField,
    blockAutoNumberField,
    showUpgradeToUseSync,
    showUpgradeToUseTableSync,
    showUpgradeToUseCustomSync,
    showUpgradeToUseRls,
    showUpgradeToUseUnique,
    showUpgradeToUseUuidField,
    showUpgradeToUseAutoNumberField,
    showUpgradeToDuplicateTableToOtherWs,
    showUpgradeToDuplicateTableToOtherBase,
    blockAddNewSandbox,
    showSandboxPlanLimitExceededModal,
    blockRecordTemplates,
    showUpgradeToUseRecordTemplates,
    blockFormScheduling,
    showUpgradeToUseFormScheduling,
    blockViewSections,
    showUpgradeToUseViewSections,
    blockBaseVariables,
    showUpgradeToUseBaseVariables,
    blockListView,
    showUpgradeToUseListView,
    blockMapView,
    showUpgradeToUseMapView,
    blockDateDependency,
    showUpgradeToUseDateDependency,
    blockExtensions,
    showUpgradeToUseExtensions,
    isEEFeatureBlocked,
    showEEFeatures,
    blockWorkspaceCreate,
    blockWorkspaceMembers,
    showUpgradeToCreateWorkspace,
    showUpgradeToManageWorkspaceMembers,
    showUpgradeForEEFeature,
    blockSSO,
    showUpgradeToUseSSO,
    blockScim,
    showUpgradeToUseScim,
    blockMssql,
    showUpgradeToUseMssql,
    blockWhiteLabel,
    showUpgradeToUseWhiteLabel,
    showUpgradeToUseAudit,
    blockSnapshots,
    showUpgradeToUseSnapshots,
    blockCustomUrls,
    showUpgradeToUseCustomUrls,
    blockScripts,
    showUpgradeToUseScripts,
    blockWorkflows,
    showUpgradeToUseWorkflows,
    blockBookmarks,
    showUpgradeToUseBookmarks,
    blockTrashSettings,
    showUpgradeToUseTrashSettings,
    blockFormGridLayout,
    showUpgradeToUseFormGridLayout,
    blockMfa,
    showUpgradeToUseMfa,
    blockForce2fa,
    showUpgradeToUseForce2fa,
  }
})