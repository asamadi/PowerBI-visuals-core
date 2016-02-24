﻿/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

/// <reference path="typedefs/typedefs.ts"/>
/// <reference path="typedefs/typedefs.obj.ts"/>

/// <reference path="semanticQuery\sqExprVisitor.ts"/>
/// <reference path="types\enumType.ts"/>
/// <reference path="types\fill.ts"/>
/// <reference path="types\fillRule.ts"/>
/// <reference path="types\image.ts"/>
/// <reference path="types\paragraphs.ts"/>
/// <reference path="types\structuralType.ts"/>
/// <reference path="types\valueType.ts"/>
/// <reference path="contracts\conceptualSchema.ts"/>
/// <reference path="contracts\dataShapeBinding.ts"/>
/// <reference path="contracts\dataShapeBindingDataReduction.ts"/>
/// <reference path="contracts\federatedConceptualSchema.ts"/>
/// <reference path="contracts\selector.ts"/>
/// <reference path="contracts\query.ts"/>
/// <reference path="contracts\queryProjection.ts"/>
/// <reference path="contracts\visualData.ts"/>
/// <reference path="dataView\colorAllocator.ts"/>
/// <reference path="dataView\compiledDataViewMapping.ts"/>
/// <reference path="dataView\dataRoleHelper.ts"/>
/// <reference path="dataView\dataViewCategoricalReader.ts"/>
/// <reference path="dataView\dataViewObjectDefinition.ts"/>
/// <reference path="dataView\dataViewObjectDescriptor.ts"/>
/// <reference path="dataView\dataViewObjectEvaluationUtils.ts"/>
/// <reference path="dataView\dataViewObjectEvaluator.ts"/>
/// <reference path="dataView\dataViewObject.ts"/>
/// <reference path="dataView\dataViewPivotCategorical.ts"/>
/// <reference path="dataView\dataViewPivotMatrix.ts"/>
/// <reference path="dataView\dataViewSelfCrossJoin.ts"/>
/// <reference path="dataView\dataViewPivotCategoricalToPrimaryGroups.ts"/>
/// <reference path="dataView\dataViewTransform.ts"/>
/// <reference path="dataView\dataViewRegression.ts"/>
/// <reference path="dataView\dataViewSelectTransform.ts"/>
/// <reference path="dataView\dataViewNormalizeValues.ts"/>
/// <reference path="displayNameGetter.ts"/>
/// <reference path="dataReader\dataReader.ts"/>
/// <reference path="iFormattingService.ts"/>
/// <reference path="semanticQuery\exprPatterns\fieldExprPattern.ts"/>
/// <reference path="dataView\dataViewAnalysis.ts"/>
/// <reference path="dataView\dataViewScopeIdentity.ts"/>
/// <reference path="dataView\dataViewScopeWildcard.ts"/>
/// <reference path="dataView\dataViewSelfCrossJoin.ts"/>
/// <reference path="dataView\dataViewTransform.ts"/>
/// <reference path="dataView\rules\evalContext.ts"/>
/// <reference path="dataView\rules\categoricalEvalContext.ts"/>
/// <reference path="dataView\rules\ruleEvaluation.ts"/>
/// <reference path="dataView\rules\colorRuleEvaluation.ts"/>
/// <reference path="dataView\scriptResultUtil.ts"/>
/// <reference path="segmentation\dataViewMerger.ts"/>
/// <reference path="semanticQuery\sqExprRewriter.ts"/>
/// <reference path="semanticQuery\exprPatterns\equalsToInRewriter.ts"/>
/// <reference path="semanticQuery\exprPatterns\filterScopeIdsCollector.ts"/>
/// <reference path="semanticQuery\exprPatterns\scopeIdentityExtractor.ts"/>
/// <reference path="semanticQuery\primitiveValueEncoding.ts"/>
/// <reference path="semanticQuery\sqHierarchyExprUtils.ts"/>
/// <reference path="semanticQuery\sqExprGroupUtils.ts"/>
/// <reference path="semanticQuery\sqExpr.ts"/>
/// <reference path="semanticQuery\sqExprUtils.ts"/>
/// <reference path="semanticQuery\semanticQueryRewriter.ts"/>
/// <reference path="semanticQuery\semanticQuery.ts"/>
/// <reference path="dataView\dataViewBuilder.ts"/>
/// <reference path="dataView\rules\staticEvalContext.ts"/>
/// <reference path="dataView\rules\matrixEvalContext.ts"/>
/// <reference path="services\formattingService.ts"/>
/// <reference path="services\serialization\sqExprShortSerializer.ts"/>

