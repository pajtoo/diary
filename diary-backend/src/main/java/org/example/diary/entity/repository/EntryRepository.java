package org.example.diary.entity.repository;

import org.example.diary.entity.EntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntryRepository extends JpaRepository<EntryEntity, Long> {
}
