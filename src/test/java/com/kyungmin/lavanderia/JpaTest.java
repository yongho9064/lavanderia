package com.kyungmin.lavanderia;

import com.kyungmin.lavanderia.member.data.entity.Member;
import com.kyungmin.lavanderia.member.data.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class JpaTest {

    @Autowired
    private MemberRepository memberRepository;


    @Test
    public void testSaveMember() {
        // Given
        Member member = Member.builder()
                .memberId("user2")
                .memberPwd("1234")
                .memberName("user2")
                .memberRole("ADMIN")
                .build();

        // When
        Member savedMember = memberRepository.save(member);

        // Then
        assertEquals(member.getMemberId(), savedMember.getMemberId());
        assertEquals(member.getMemberPwd(), savedMember.getMemberPwd());
        assertEquals(member.getMemberName(), savedMember.getMemberName());
        assertEquals(member.getMemberRole(), savedMember.getMemberRole());

        memberRepository.delete(savedMember);
    }

    @Test
    public void testFindById() {
        // Given
        Member member = Member.builder()
                .memberId("user2")
                .memberPwd("1234")
                .memberName("user2")
                .memberRole("ADMIN")
                .build();
        Member savedMember = memberRepository.save(member);


        // When
        Optional<Member> foundMember = memberRepository.findById(savedMember.getMemberId());

        // Then
        assertEquals(foundMember.get().getMemberId(), savedMember.getMemberId());
        assertEquals(foundMember.get().getMemberPwd(), savedMember.getMemberPwd());
        assertEquals(foundMember.get().getMemberName(), savedMember.getMemberName());
        assertEquals(foundMember.get().getMemberRole(), savedMember.getMemberRole());

        memberRepository.delete(foundMember.get());
    }
}
