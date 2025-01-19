package org.example.diary.service;

import org.example.diary.dto.EntryDTO;
import org.example.diary.entity.EntryEntity;
import org.example.diary.entity.repository.EntryRepository;
import org.example.diary.mapper.EntryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EntryServiceImpl implements EntryService {

    private final EntryRepository entryRepository;
    private final EntryMapper entryMapper;

    @Autowired
    public EntryServiceImpl(
            EntryRepository entryRepository,
            EntryMapper entryMapper
    ) {
        this.entryRepository = entryRepository;
        this.entryMapper = entryMapper;
    }

    @Override
    public List<EntryDTO> getEntries() {
               return entryRepository.findAll()
                        .stream()
                        .map(e -> entryMapper.toDTO(e))
                        .toList();
    }

    @Override
    public EntryDTO createEntry(EntryDTO entryDTO) {
        EntryEntity entityToSave = entryMapper.toEntity(entryDTO);
        entityToSave.setCreatedAt(LocalDateTime.now());
        EntryEntity savedEntity = entryRepository.save(entityToSave);
        return entryMapper.toDTO(savedEntity);
    }

    @Override
    public void deleteEntry(long id) {
        entryRepository.deleteById(id);
    }
}
