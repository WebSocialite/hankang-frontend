import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const GET_SELLERS = gql`
	query GetSellers($input: SellersInquiry!) {
    getSellers(input: $input) {
        list {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAddress
            memberDesc
            memberProducts
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
            meFollowed {
                followingId
                followerId
                myFollowing
            }
        }
        metaCounter {
            total
        }
    }
}

`;

export const GET_MEMBER = gql(`
query GetMember($input: String!) {
    getMember(memberId: $input) {
        _id
        memberType
        memberStatus
        memberAuthType
        memberPhone
        memberNick
        memberFullName
        memberImage
        memberAddress
        memberDesc
        memberProducts
        memberArticles
        memberFollowers
        memberFollowings
        memberPoints
        memberLikes
        memberViews
        memberComments
        memberRank
        memberWarnings
        memberBlocks
        deletedAt
        createdAt
        updatedAt
        accessToken
        meLiked {
            memberId
            likeRefId
            myFavorite
        }
        meFollowed {
            followingId
            followerId
            myFollowing
        }
    }
}

`);

/**************************
 *        PROPERTY        *
 *************************/

export const GET_PRODUCT = gql`
	query GetProduct($input: String!) {
    getProduct(productId: $input) {
        _id
        productType
        productStatus
        productAddress
        productTitle
        productPrice
        productViews
        productLikes
        productComments
        productRank
        productImages
        productDesc
        memberId
        createdAt
        soldAt
        deletedAt
        constructedAt
        updatedAt
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAddress
            memberDesc
            memberProducts
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
        meLiked {
            memberId
            likeRefId
            myFavorite
        }
    }
}

`;

export const GET_PRODUCTS = gql`
	query GetProducts($input: ProductsInquiry!) {
    getProducts(input: $input) {
        list {
            _id
            productType
            productStatus
            productAddress
            productTitle
            productPrice
            productViews
            productLikes
            productComments
            productRank
            productImages
            productDesc
            memberId
            createdAt
            soldAt
            deletedAt
            constructedAt
            updatedAt
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
            memberData {
                _id
                memberType
                memberStatus
                memberAuthType
                memberPhone
                memberNick
                memberFullName
                memberImage
                memberAddress
                memberDesc
                memberProducts
                memberArticles
                memberFollowers
                memberFollowings
                memberPoints
                memberLikes
                memberViews
                memberComments
                memberRank
                memberWarnings
                memberBlocks
                deletedAt
                createdAt
                updatedAt
                accessToken
                meFollowed {
                    followingId
                    followerId
                    myFollowing
                }
                meLiked {
                    memberId
                    likeRefId
                    myFavorite
                }
            }
        }
        metaCounter {
            total
        }
    }
}

`;

export const GET_SELLER_PRODUCTS = gql`
	query GetSellerProducts($input: SellerProductsInquiry!) {
    getSellerProducts(input: $input) {
        metaCounter {
            total
        }
        list {
            _id
            productType
            productStatus
            productAddress
            productTitle
            productPrice
            productViews
            productLikes
            productComments
            productRank
            productImages
            productDesc
            memberId
            createdAt
            soldAt
            deletedAt
            constructedAt
            updatedAt
        }
    }
}

`;

export const GET_FAVORITES = gql`
	query GetSellerProducts($input: SellerProductsInquiry!) {
    getSellerProducts(input: $input) {
        metaCounter {
            total
        }
        list {
            _id
            productType
            productStatus
            productAddress
            productTitle
            productPrice
            productViews
            productLikes
            productComments
            productRank
            productImages
            productDesc
            memberId
            createdAt
            soldAt
            deletedAt
            constructedAt
            updatedAt
        }
    }
}

`;

export const GET_VISITED = gql`
	query GetVisited($input: OrdinaryInquiry!) {
    getVisited(input: $input) {
        list {
            _id
            productType
            productStatus
            productAddress
            productTitle
            productPrice
            productViews
            productLikes
            productComments
            productRank
            productImages
            productDesc
            memberId
            createdAt
            soldAt
            deletedAt
            constructedAt
            updatedAt
        }
        metaCounter {
            total
        }
    }
}

`;

/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const GET_BOARD_ARTICLE = gql`
	query GetBoardArticle($input: String!) {
    getBoardArticle(articleId: $input) {
        _id
        articleCategory
        articleStatus
        articleTitle
        articleContent
        articleImage
        articleViews
        articleLikes
        articleComments
        memberId
        createdAt
        updatedAt
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberAddress
            memberDesc
            memberProducts
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            updatedAt
            accessToken
        }
        meLiked {
            memberId
            likeRefId
            myFavorite
        }
    }
}
`;

export const GET_BOARD_ARTICLES = gql`
	query GetBoardArticles($input: BoardArticlesInquiry!) {
    getBoardArticles(input: $input) {
        metaCounter {
            total
        }
        list {
            _id
            articleCategory
            articleStatus
            articleTitle
            articleContent
            articleImage
            articleViews
            articleLikes
            articleComments
            memberId
            createdAt
            updatedAt
        }
    }
}

`;

/**************************
 *         COMMENT        *
 *************************/

export const GET_COMMENTS = gql`
	query GetComments($input: CommentsInquiry!) {
    getComments(articleId: $input) {
        list {
            _id
            commentStatus
            commentGroup
            commentContent
            commentRefId
            memberId
            createdAt
            updatedAt
        }
        metaCounter {
            total
        }
    }
}

`;

/**************************
 *         FOLLOW        *
 *************************/
export const GET_MEMBER_FOLLOWERS = gql`
	query GetMemberFollowers($input: FollowInquiry!) {
    getMemberFollowers(input: $input) {
        metaCounter {
            total
        }
        list {
            _id
            followingId
            followerId
            createdAt
            updatedAt
            followerData {
                _id
                memberType
                memberStatus
                memberAuthType
                memberPhone
                memberNick
                memberFullName
                memberImage
                memberAddress
                memberDesc
                memberProducts
                memberArticles
                memberFollowers
                memberFollowings
                memberPoints
                memberLikes
                memberViews
                memberComments
                memberRank
                memberWarnings
                memberBlocks
                deletedAt
                createdAt
                updatedAt
                accessToken
                meFollowed {
                    followingId
                    followerId
                    myFollowing
                }
                meLiked {
                    memberId
                    likeRefId
                    myFavorite
                }
            }
            meFollowed {
                followingId
                followerId
                myFollowing
            }
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
        }
    }
}


`;

export const GET_MEMBER_FOLLOWINGS = gql`
	query GetMemberFollowings($input: FollowInquiry!) {
    getMemberFollowings(input: $input) {
        list {
            _id
            followingId
            followerId
            createdAt
            updatedAt
            followingData {
                _id
                memberType
                memberStatus
                memberAuthType
                memberPhone
                memberNick
                memberFullName
                memberImage
                memberAddress
                memberDesc
                memberProducts
                memberArticles
                memberFollowers
                memberFollowings
                memberPoints
                memberLikes
                memberViews
                memberComments
                memberRank
                memberWarnings
                memberBlocks
                deletedAt
                createdAt
                updatedAt
                accessToken
            }
            meFollowed {
                followingId
                followerId
                myFollowing
            }
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
        }
        metaCounter {
            total
        }
    }
}


`;
