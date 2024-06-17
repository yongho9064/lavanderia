CREATE TABLE TBL_MEMBER (
    `MEMBER_ID` VARCHAR(255) NOT NULL,
    `MEMBER_PWD` VARCHAR(255) NOT NULL,
    `MEMBER_NAME` VARCHAR(255) NOT NULL,
    `MEMBER_EMAIL` VARCHAR(255) NOT NULL,
    `MEMBER_PHONE` VARCHAR(255) NOT NULL,
    `MEMBER_LEVEL` VARCHAR(255) NOT NULL DEFAULT 'BASIC',
    `MEMBER_POINT` BIGINT NOT NULL DEFAULT 0,
    `AGREE_MARKETING_YN` CHAR(1) NOT NULL,
    `ACC_INACTIVE_YN` CHAR(1) NOT NULL DEFAULT 'N',
    `TEMP_PWD_YN` CHAR(1) NOT NULL DEFAULT 'N',
    `ACC_LOGIN_COUNT` BIGINT NOT NULL DEFAULT 0,
    `LOGIN_FAIL_COUNT` BIGINT NOT NULL DEFAULT 0,
    `LAST_LOGIN_DATE` DATETIME NULL,
    `ACC_REGISTER_DATE` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `ACC_UPDATE_DATE` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `ACC_DELETE_DATE` DATETIME NULL,
    PRIMARY KEY (`MEMBER_ID`)
);

INSERT INTO TBL_MEMBER (MEMBER_ID, MEMBER_PWD, MEMBER_NAME, MEMBER_EMAIL, MEMBER_PHONE, AGREE_MARKETING_YN) VALUES('user', '$2a$10$HdOg00x3nTNCO06RwdeiA.dsWWJlWLHpx9jM8qVnQp35H3cxjDfCy', '유저',
                                                                                                                   'abc@naver.com', '010-1234-5678', 'Y');

-- Member 테이블에 더미 데이터 추가
INSERT INTO TBL_MEMBER (MEMBER_ID, MEMBER_PWD, MEMBER_NAME, MEMBER_EMAIL, MEMBER_PHONE, MEMBER_LEVEL, MEMBER_POINT, AGREE_MARKETING_YN, ACC_INACTIVE_YN, TEMP_PWD_YN, ACC_LOGIN_COUNT, LOGIN_FAIL_COUNT, LAST_LOGIN_DATE, ACC_REGISTER_DATE, ACC_UPDATE_DATE, ACC_DELETE_DATE)
VALUES ('user', '$2a$10$HdOg00x3nTNCO06RwdeiA.dsWWJlWLHpx9jM8qVnQp35H3cxjDfCy', 'User One', 'user1@example.com', '123456789', 'level1', '100', 'Y', 'N', 'N', 5, 0, '2024-05-31', '2024-05-31', '2024-05-31', NULL),
       ('admin', '$2a$10$HdOg00x3nTNCO06RwdeiA.dsWWJlWLHpx9jM8qVnQp35H3cxjDfCy', 'User Two', 'user2@example.com', '987654321', 'level2', '200', 'Y', 'N', 'N', 10, 2, '2024-05-30', '2024-05-30',
        '2024-05-31', NULL);


INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (1, '2024-06-15 18:56:25.039117', null, '패션', '저 처음이에요', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/5077a118-d230-4596-a148-27be0e52fc63?generation=1718445385898764&alt=media', '안녕하세요', 0, 'admin');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (2, '2024-06-16 19:53:16.113891', null, '후기', '정말정말 좋아요', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/37e7dc87-47ff-4dfb-996d-bf377e716a97?generation=1718535196133984&alt=media', '이제품 좋아요', 0, 'user');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (3, '2024-06-16 19:54:38.642373', null, '패션', 'ㅇㅇ', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/b782c264-7e9e-49bd-80f9-18b3d301fdc8?generation=1718535278692044&alt=media', '제 옷 어때요?', 0, 'user');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (4, '2024-06-16 19:55:36.477552', null, '패션', '너무너무 이뻐요', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/f77d51ac-49ce-49a4-97d3-8ae1ba587edd?generation=1718535336528776&alt=media', '이옷 이뻐요', 0, 'user');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (5, '2024-06-16 19:56:21.341979', null, '패션', '구찌 가지고 싶어요', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/e7c1a5ae-a227-4540-87bb-b8150450d75c?generation=1718535381394845&alt=media', '이거 사주세요', 0, 'admin');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (6, '2024-06-16 19:57:13.071390', null, '후기', '맛있네요', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/5599f29b-6bdc-4bd3-ad80-5bb46b00de30?generation=1718535433124477&alt=media', '이 제품 저가 먹어봤는데', 0, 'admin');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (7, '2024-06-16 19:58:00.352556', null, '후기', '추천해요', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/9dc66887-fe77-40ec-830a-cc0b1c11cc74?generation=1718535480407260&alt=media', '이 제품 추천합니다.', 0, 'user');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (8, '2024-06-16 19:59:02.752668', null, '후기', '별로에요', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/75d87d45-c719-4ae3-84ce-20c9a445ba91?generation=1718535542807840&alt=media', '이제품 약간 별로네요', 0, 'admin');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (9, '2024-06-16 20:00:42.984266', null, '패션', 'ㅇㅇ?', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/254d8219-b2b4-40b2-adc2-3f82c4939385?generation=1718535643040469&alt=media', '어떤가요?', 0, 'user');
INSERT INTO TBL_COMMUNITY (COMMUNITY_ID, CREATED_AT, UPDATED_AT, CATEGORY, CONTENT, IMAGE, TITLE, VIEW_COUNT, MEMBER_ID) VALUES (10, '2024-06-16 20:01:36.642996', null, '패션', 'ㅇㅇ', 'https://storage.googleapis.com/download/storage/v1/b/lavanderia_img/o/e3a30213-c3bd-448a-93ac-51b4bebc7b6b?generation=1718535696702326&alt=media', '심플', 0, 'admin');

INSERT INTO TBL_ROLE (ROLE_ID, AUTHORITIES, MEMBER_ID) VALUES (1, 'ROLE_USER', 'user');
INSERT INTO TBL_ROLE (ROLE_ID, AUTHORITIES, MEMBER_ID) VALUES (2, 'ROLE_ADMIN', 'admin');