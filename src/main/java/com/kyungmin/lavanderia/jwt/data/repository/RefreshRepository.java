package com.kyungmin.lavanderia.jwt.data.repository;

import com.kyungmin.lavanderia.jwt.data.entity.RefreshEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface RefreshRepository extends CrudRepository<RefreshEntity,String> {

    Boolean existsByRefresh(String refresh);

    RefreshEntity findByRefresh(String refresh);
}
