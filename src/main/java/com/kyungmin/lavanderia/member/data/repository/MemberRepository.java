package com.kyungmin.lavanderia.member.data.repository;

import com.kyungmin.lavanderia.member.data.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity,String> {
}
